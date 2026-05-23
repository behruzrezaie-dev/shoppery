import { AnimatedSection } from '@/Components/Layout/AnimatedSection';

const BestSellerProducts = () => {
    return (
        <AnimatedSection>
            <section className="container mx-auto flex max-w-[1280px] flex-col px-4 pb-10">
                <div className="flex justify-between">
                    <h1 className="text-[25px] font-semibold leading-[120%] tracking-[0%] text-[#1A1A1A] md:text-[30px] lg:text-[35px] xl:text-[40px]">
                        Best Seller Products
                    </h1>
                    <button className="flex items-center gap-2 text-[14px] font-medium leading-[150%] tracking-[0%] text-[#00B207] lg:text-[16px]">
                        View All{' '}
                        <div>
                            <img src="/images/Home/Category/arrow.png" alt="" />
                        </div>
                    </button>
                </div>
                <div></div>
            </section>
        </AnimatedSection>
    );
};

export default BestSellerProducts;
