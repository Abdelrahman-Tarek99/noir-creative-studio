import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NOIR — fictional creative studio concept.",
};

export default function Contact() {
  return (
    <section className="simple-page wrap">
      <p className="section-label">Contact / Say hello</p>
      <h1>
        Let&apos;s make<br />
        <em>something</em> matter.
      </h1>

      <Reveal>
        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-lead">
              Have a project in mind? We&apos;d love to hear about it.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-label">Email</span>
                <span>hello@noir-studio.concept</span>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-label">Based</span>
                <span>Everywhere, working worldwide</span>
              </div>
            </div>
            <p className="note">
              This is a fictional studio. The contact form demonstrates
              server-side validation and form handling — configure an email
              provider to make it deliver messages.
            </p>
          </div>

          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
