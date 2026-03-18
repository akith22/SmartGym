const Services = () => {
  return (
    <section id="services" className="mb-[96px] max-w-[1280px] mx-auto px-[16px] md:px-[40px] py-[48px]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-[48px] gap-[24px]">
        <div className="max-w-[672px]">
          <h2 className="text-[30px] leading-[36px] font-bold text-[#f1f5f9] mb-[16px]">Our Premium Services</h2>
          <p className="text-[#c8b993]">Tailored performance programs designed to help you dominate your fitness goals. From heavy lifts to precision nutrition, we have everything you need to succeed.</p>
        </div>
        <button className="flex items-center gap-[8px] text-[#d49e16] font-bold hover:underline">
          View All Services <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {/* Service 1 */}
        <div className="group bg-[#3d3623]/30 border border-[#3d3623] rounded-[12px] p-[4px] transition-all hover:border-[#d49e16]/50">
          <div className="aspect-square w-full rounded-[8px] overflow-hidden mb-[16px] relative">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              alt="Personal trainer guiding an athlete with weights" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiMjMeT6_Dy7MheyaLt66asCoHrHJyuyr1z1IAQn292vsUOJ2M7r28oP7xLWkWbeLxsq2Od9r0M67uP7pofsHQT-v6czSVwHJeuu_eadtvUt3xqBy6onam5xaK8mdguAtManmcfniMSa10M2v2DGgRNBfMVatgZOMSq26UakbCRqbZvk_-U7yi67egjQPwpXLTKv7Ok_IRxgX72-563uJrmBQJoZgqwoyDz2KWEqaUaln8HpQBviWZCYnbtxWJ1egooU_t9clEkns"
            />
            <div className="absolute inset-[0px] bg-gradient-to-t from-[#211d11]/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-[16px]">
            <div className="flex items-center gap-[8px] mb-[8px]">
              <span className="material-symbols-outlined text-[#d49e16] text-[20px] leading-[28px]">person</span>
              <h3 className="text-[#f1f5f9] font-bold text-[18px] leading-[28px]">Personal Training</h3>
            </div>
            <p className="text-[#c8b993] text-[14px] leading-[20px] mb-[16px]">
              One-on-one elite coaching focused on your specific mechanical needs and performance goals.
            </p>
            <a href="#" className="text-[#d49e16] text-[12px] leading-[16px] font-bold uppercase tracking-[0.1em] flex items-center gap-[4px] group-hover:gap-[8px] transition-all">
              Learn More <span className="material-symbols-outlined text-[14px] leading-[20px]">chevron_right</span>
            </a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="group bg-[#3d3623]/30 border border-[#3d3623] rounded-[12px] p-[4px] transition-all hover:border-[#d49e16]/50">
          <div className="aspect-square w-full rounded-[8px] overflow-hidden mb-[16px] relative">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              alt="Athlete performing a heavy barbell squat" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBFtpqsSnHBUf7NXKJrUbxLgqjMJIHetdhTSLVbNUu2ipjJYi8683p9SqC53vC2xHG0dsYZYiK8WVhcI0v2LjovavnsIjG1FMlROjfCjMGNIjeSir89gy6sPib4AjhnUkavUosiJwxobVzqjcUpKpk6WLdGrJM9htLTJPDKufZus47QRcq9FOXX0HBMpBsWYLYFUGsnDfnILlNDI_HpYBxGgK5Pvczx0OACS36z7Hx1aBKxbgZ9dG5MB5sIOEoX55lLu5tKfbmfK8"
            />
            <div className="absolute inset-[0px] bg-gradient-to-t from-[#211d11]/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-[16px]">
            <div className="flex items-center gap-[8px] mb-[8px]">
              <span className="material-symbols-outlined text-[#d49e16] text-[20px] leading-[28px]">fitness_center</span>
              <h3 className="text-[#f1f5f9] font-bold text-[18px] leading-[28px]">Strength Training</h3>
            </div>
            <p className="text-[#c8b993] text-[14px] leading-[20px] mb-[16px]">
              Advanced weightlifting and powerlifting programs designed to build raw power and solid foundation.
            </p>
            <a href="#" className="text-[#d49e16] text-[12px] leading-[16px] font-bold uppercase tracking-[0.1em] flex items-center gap-[4px] group-hover:gap-[8px] transition-all">
              Learn More <span className="material-symbols-outlined text-[14px] leading-[20px]">chevron_right</span>
            </a>
          </div>
        </div>

        {/* Service 3 */}
        <div className="group bg-[#3d3623]/30 border border-[#3d3623] rounded-[12px] p-[4px] transition-all hover:border-[#d49e16]/50">
          <div className="aspect-square w-full rounded-[8px] overflow-hidden mb-[16px] relative">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              alt="Person running fast on a treadmill" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBigvyxiHhxeOucWF7sni2Tsfo34g8rES0xBMSyHLK2fd7kwEj9DHv8kCqzrkm2OUkj87Px2Qa6l8XEgSr5PrAeLX539WQnYqIZy7M6QHr0q3-ifm71DYL3Wr6ayex2QW4L0nqiLlqjwv0nhKdI6z58NZcE-m3ko4ZGE0e77aXyJcF1rh-1TDzGCux5_dcqIHOyEE9eyXD4yqfhFh4RKcxeth-bdMa3NdYCKXY-miry-K6dGAzG2UoW4F_VI__5QNFcWulUAZEV_oU"
            />
            <div className="absolute inset-[0px] bg-gradient-to-t from-[#211d11]/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-[16px]">
            <div className="flex items-center gap-[8px] mb-[8px]">
              <span className="material-symbols-outlined text-[#d49e16] text-[20px] leading-[28px]">speed</span>
              <h3 className="text-[#f1f5f9] font-bold text-[18px] leading-[28px]">Cardio Programs</h3>
            </div>
            <p className="text-[#c8b993] text-[14px] leading-[20px] mb-[16px]">
              High-intensity endurance training to maximize metabolic rate and improve cardiovascular efficiency.
            </p>
            <a href="#" className="text-[#d49e16] text-[12px] leading-[16px] font-bold uppercase tracking-[0.1em] flex items-center gap-[4px] group-hover:gap-[8px] transition-all">
              Learn More <span className="material-symbols-outlined text-[14px] leading-[20px]">chevron_right</span>
            </a>
          </div>
        </div>

        {/* Service 4 */}
        <div className="group bg-[#3d3623]/30 border border-[#3d3623] rounded-[12px] p-[4px] transition-all hover:border-[#d49e16]/50">
          <div className="aspect-square w-full rounded-[8px] overflow-hidden mb-[16px] relative">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              alt="Healthy meal prep containers with protein and greens" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnJpp3oZGPO5khVAkrabFFTP6vkciWUbmCVUFHDk8QmM3qjkcaJF0Nxq8aNwHcCJbmb9NrjYpJuCPPhdzhGKqDFwP8gpS9tq8L02d0owDpgYXwkpazLAwVwvWCxgdZ1CY9UMQ9RI5RzTkGwYOBBs9unXfesWL1phNGzPjYow9fghoIMBHcWluAVdgK5_J4DHMtgZxHucczeRURSdbVbH012yfJCvO-tM8qPAG0ID-z4lR6z6bwYts8pDssY-dk8SIM8VStUFb5G5Q"
            />
            <div className="absolute inset-[0px] bg-gradient-to-t from-[#211d11]/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-[16px]">
            <div className="flex items-center gap-[8px] mb-[8px]">
              <span className="material-symbols-outlined text-[#d49e16] text-[20px] leading-[28px]">nutrition</span>
              <h3 className="text-[#f1f5f9] font-bold text-[18px] leading-[28px]">Nutrition Guidance</h3>
            </div>
            <p className="text-[#c8b993] text-[14px] leading-[20px] mb-[16px]">
              Custom meal and fuel plans tailored to your biometric data and training volume.
            </p>
            <a href="#" className="text-[#d49e16] text-[12px] leading-[16px] font-bold uppercase tracking-[0.1em] flex items-center gap-[4px] group-hover:gap-[8px] transition-all">
              Learn More <span className="material-symbols-outlined text-[14px] leading-[20px]">chevron_right</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
