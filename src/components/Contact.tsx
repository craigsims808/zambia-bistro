export const Contact = () => {
  return (
    <section className="bg-secondary py-20 text-cream">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Visit Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Location</h3>
              <p>123 Cairo Road</p>
              <p>Lusaka, Zambia</p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold">Contact</h3>
                <p>Phone: +260 97 1234567</p>
                <p>Email: info@tasteofzambia.com</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Opening Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p>Saturday: 10:00 AM - 11:00 PM</p>
                <p>Sunday: 10:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};