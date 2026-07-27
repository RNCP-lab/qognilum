import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-14 bg-[#141a3f]">
      <div
        className="pointer-events-none absolute -bottom-56 -left-40 h-[46rem] w-[46rem] rounded-full bg-[#0a0f26]/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:py-28">
        <span className="font-jura bg-gradient-to-r from-white to-[#9DB8F2] bg-clip-text text-4xl font-semibold tracking-wide text-transparent sm:text-5xl">
          Contact
        </span>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#DFE2EF]/85">
          Interested in working with us or learning more about our
          technology? Send us a message and our team will get back to you.
        </p>

        <div className="mt-14">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
