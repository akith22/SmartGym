const CTA = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="section-container">
        <div className="bg-accent rounded-3xl p-12 md:p-20 text-center shadow-soft">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
            Ready to start your transformation?
          </h2>
          <p className="text-primary/80 font-medium text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join our elite community today and get a complimentary 1-on-1 performance assessment with our head coach.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 w-full sm:w-auto">
              Join Membership
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto">
              Tour Facilities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
