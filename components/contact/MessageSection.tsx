"use client";

import { useState } from "react";

import MessageForm from "@/components/contact/MessageForm";
import ContactSidebar from "./ContactSidebar";

const MessageSection = () => {
    const [formData, setFormData] = useState(null);
  return (
    <section className="w-full">
      <div className="mx-auto px-5 md:px-10 py-10 md:py-14">
        <div className="grid xl:grid-cols-[minmax(0,1fr)_320px] gap-8 mx-auto">
                {/* Left */}
                <div className="max-w-5xl">
                    <div className="flex flex-col gap-6 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm w-full">
                        <div className="flex items-start gap-4">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-xl md:text-3xl text-foreground/80 font-medium">
                                    Send Us a Message
                                </h2>
                                <span className="text-sm text-foreground/50">
                                    Fill out the details below and we'll generate a custom logistics plan for you.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Free Moving Estimate",
                                "Quick Response",
                                "No Hidden Charges",
                                "Trusted Movers in Kathmandu",
                            ].map((item) => (
                                <div
                                key={item}
                                className="rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-xs text-foreground/70"
                                >
                                {item}
                                </div>
                            ))}
                        </div>
                        <MessageForm setFormData={setFormData} />
                    </div>

                </div>
                {/* Right */}
                <div className="hidden xl:flex flex-col gap-4 w-80 sticky top-24 self-start">
                    <ContactSidebar />
                </div>
            </div>
      </div>
    </section>
  )
}

export default MessageSection;