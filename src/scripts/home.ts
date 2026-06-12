// 1. Typewriter Effect Logic
const text = "Hi, I'm Irfan Khattak.";
const element = document.getElementById("typewriter");
let i = 0;
let isDeleting = false;

function typeWriter() {
    if (!element) return;

    if (isDeleting) {
        element.innerHTML = text.substring(0, i - 1);
        i--;
    } else {
        element.innerHTML = text.substring(0, i + 1);
        i++;
    }

    let typeSpeed = 100;
    if (isDeleting) typeSpeed = 50;

    if (!isDeleting && i === text.length) {
        typeSpeed = 2500;
        isDeleting = true;
    } else if (isDeleting && i === 0) {
        isDeleting = false;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}
setTimeout(typeWriter, 400);

// 2. Terminal Boot Sequence Logic
const termContainer = document.getElementById(
    "terminal-container",
) as HTMLElement;
const termCmd = document.getElementById("term-cmd") as HTMLElement;
const termCursor1 = document.getElementById("term-cursor-1") as HTMLElement;
const termOutput = document.getElementById("term-output") as HTMLElement;
const termPrompt2 = document.getElementById("term-prompt-2") as HTMLElement;

// Add this safety check
if (
    !termContainer ||
    !termCmd ||
    !termCursor1 ||
    !termOutput ||
    !termPrompt2
) {
    console.error("Terminal elements not found.");
} else {
    // Place all your existing terminal logic INSIDE this else block
    const commandText = "cat ifkhtk.json";
    let cmdIndex = 0;
    let terminalHasRun = false;

    function typeTerminal() {
        if (cmdIndex < commandText.length) {
            termCmd.innerHTML += commandText.charAt(cmdIndex);
            cmdIndex++;
            setTimeout(typeTerminal, 50);
        } else {
            setTimeout(() => {
                termCursor1.style.display = "none";
                termOutput.classList.remove("hidden");
                termPrompt2.classList.remove("hidden");

                setTimeout(() => {
                    termOutput.classList.remove("opacity-0");
                    termPrompt2.classList.remove("opacity-0");
                }, 50);
            }, 400);
        }
    }

    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting && !terminalHasRun) {
                terminalHasRun = true;
                setTimeout(typeTerminal, 600);
            }
        },
        { threshold: 0.5 },
    );

    observer.observe(termContainer);
}
// 3. Formspree AJAX Submission Logic
// We add "as HTML___Element" to tell VS Code exactly what these are
const contactForm = document.getElementById(
    "contact-form",
) as HTMLFormElement;
const submitBtn = document.getElementById(
    "submit-btn",
) as HTMLButtonElement;
const btnText = document.getElementById("btn-text") as HTMLSpanElement;
const btnIcon = document.getElementById("btn-icon") as HTMLElement;

if (contactForm && submitBtn && btnText) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Stop the browser from redirecting to Formspree

        // Set Loading State
        const originalText = btnText.innerText;
        btnText.innerText = "Sending...";
        submitBtn.disabled = true;
        submitBtn.classList.add("opacity-70", "cursor-wait");

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                // 1. Clear the inputs
                contactForm.reset();

                // 2. Show Success State
                btnText.innerText = "Message Sent";

                // Swap button colors to green
                submitBtn.classList.remove(
                    "bg-cyan-500/10",
                    "text-cyan-400",
                    "border-cyan-500/30",
                    "hover:bg-cyan-500/20",
                    "opacity-70",
                    "cursor-wait"
                );
                submitBtn.classList.add(
                    "bg-emerald-500/20",
                    "text-emerald-400",
                    "border",
                    "border-emerald-500/50",
                );

                // 3. Revert button back to normal after 4 seconds
                setTimeout(() => {
                    btnText.innerText = originalText;
                    submitBtn.disabled = false;

                    // Restore original colors
                    submitBtn.classList.remove(
                        "bg-emerald-500/20",
                        "text-emerald-400",
                        "border",
                        "border-emerald-500/50",
                    );
                    submitBtn.classList.add(
                        "bg-cyan-500/10",
                        "text-cyan-400",
                        "border",
                        "border-cyan-500/30",
                        "hover:bg-cyan-500/20"
                    );
                }, 4000);
            } else {
                // Handle Formspree Errors
                btnText.innerText = "Oops! Transmission Failed.";
                setTimeout(() => {
                    btnText.innerText = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove("opacity-70", "cursor-wait");
                }, 3000);
            }
        } catch (error) {
            btnText.innerText = "Network Error.";
            setTimeout(() => {
                btnText.innerText = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove("opacity-70", "cursor-wait");
            }, 3000);
        }
    });
}

// SYSTEM BOOT SEQUENCE (SCROLL REVEAL)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the card is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the hidden states, snap to visible
                entry.target.classList.remove('opacity-0', 'translate-y-12');
                entry.target.classList.add('opacity-100', 'translate-y-0');

                // Unobserve so the animation only happens once per page load
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Find all elements we marked and watch them
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => scrollObserver.observe(el));
});

// 4. Copy Email to Clipboard Logic
document.addEventListener("DOMContentLoaded", () => {
    const copyBtn = document.getElementById("copy-email-btn");
    const copyIconSvg = document.getElementById("copy-icon-svg");

    if (copyBtn && copyIconSvg) {
        copyBtn.addEventListener("click", async (e) => {
            // CRITICAL: Stop the click from bubbling up and triggering the mailto: link!
            e.preventDefault();
            e.stopPropagation();

            const email = "hello@irfankhattak.com";

            try {
                // Write to system clipboard
                await navigator.clipboard.writeText(email);

                // Visual Feedback: Swap to a green checkmark
                copyIconSvg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`;
                copyBtn.classList.replace("text-slate-400", "text-emerald-400");
                copyBtn.classList.replace("hover:text-cyan-400", "hover:text-emerald-300");

                // Revert back to the standard copy icon after 2 seconds
                setTimeout(() => {
                    copyIconSvg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>`;
                    copyBtn.classList.replace("text-emerald-400", "text-slate-400");
                    copyBtn.classList.replace("hover:text-emerald-300", "hover:text-cyan-400");
                }, 2000);
            } catch (err) {
                console.error("Failed to copy email: ", err);
            }
        });
    }
});

// MOBILE DRAWER LOGIC
const btn = document.getElementById("mobile-menu-btn");
const closeBtn = document.getElementById("close-drawer-btn");
const overlay = document.getElementById("mobile-overlay") as HTMLElement;
const drawer = document.getElementById("mobile-drawer") as HTMLElement;
const links = document.querySelectorAll(".mobile-link");

function openMenu() {
    // Show and fade in the blurred overlay
    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.remove("opacity-0"), 10);

    // Slide the drawer in from the right
    drawer.classList.remove("translate-x-full");

    document.body.style.overflow = "hidden"; // Locks background scrolling
}

function closeMenu() {
    // Slide the drawer back out to the right
    drawer.classList.add("translate-x-full");

    // Fade out and hide the overlay
    overlay.classList.add("opacity-0");
    setTimeout(() => overlay.classList.add("hidden"), 300);

    document.body.style.overflow = ""; // Unlocks background scrolling
}

// Event Listeners
btn?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);
overlay?.addEventListener("click", closeMenu); // Closes menu if user taps the blurred background
links.forEach((link) => link.addEventListener("click", closeMenu));