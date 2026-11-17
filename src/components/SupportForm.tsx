"use client";

import { useState } from "react";

export const SupportForm = () => {
    const [type, setType] = useState("bug");
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        setIsLoading(true);
        setFeedback("");

        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            type,
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to send message.");
            }

            setFeedback("Message sent successfully! Thank you for reaching out.");
            form.reset();
            setType("bug");

        } catch (error) {
            setFeedback(
                error instanceof Error
                    ? error.message
                    : "Unable to send your message."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 max-w-xl mx-6"
        >
            <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="What should we call you?"
                    required
                    className="rounded-lg border border-gray-500 bg-transparent p-3 outline-none focus:border-amber-200"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="email">Your email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                    className="rounded-lg border border-gray-500 bg-transparent p-3 outline-none focus:border-amber-200"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label>Message type</label>

                <div className="flex flex-col gap-2">
                    {[
                        { value: "bug", label: "Report a bug" },
                        { value: "suggestion", label: "Send a suggestion" },
                        { value: "other", label: "Other" },
                    ].map((option) => (
                        <label
                            key={option.value}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="type"
                                value={option.value}
                                checked={type === option.value}
                                onChange={() => setType(option.value)}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="subject">Subject</label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Error loading Pokémon"
                    required
                    className="rounded-lg border border-gray-500 bg-transparent p-3 outline-none focus:border-amber-200"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Describe your message in detail..."
                    required
                    className="rounded-lg border border-gray-500 bg-transparent p-3 outline-none focus:border-amber-200 resize-y"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="rounded-lg bg-amber-300 text-black font-semibold p-3 hover:bg-amber-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? "Sending..." : "Send message"}
            </button>

            {feedback && (
                <p role="status" aria-live="polite" className="text-sm">
                    {feedback}
                </p>
            )}

            <p className="text-xs text-gray-400 text-center">
                Your information will only be used to respond to your message.
            </p>
        </form>
    );
};