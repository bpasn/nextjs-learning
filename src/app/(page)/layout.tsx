import NavbarComponent from '@/components/NavbarComponent';
import ModalProvider from '@/providers/ModalProvider';
import React from 'react';
import { getCategories } from './shop/(root)/action/fetchCategories';

const LayoutClient = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    const categories = await getCategories();
    return (
        <div>
            <NavbarComponent categories={categories} />
            <main className="relative flex min-h-screen flex-col  px-0">
                {/* <ModalLoginProvider /> */}
                {children}
            </main>
            <footer  className="flex flex-col gap-4">
                <div data-v-093c45ac="" className="container container-xl">
                    <div data-v-093c45ac="" className="service-list flex flex-wrap">
                        <div data-v-093c45ac="" className="service">
                            <div data-v-093c45ac="" className="icon-wrapper"><a data-v-093c45ac="" href="/th/pages/shipping"
                                className="icon-link" target="_blank">
                                <img data-v-093c45ac=""
                                    src="https://www.bnn.in.th/_nuxt/img/freeshipping.045fe78.svg" alt="free shipping" loading="lazy"
                                    width="100%" height="100%" className="icon icon-free-shipping" />
                            </a>
                            </div>
                            <div data-v-093c45ac="" className="info">
                                <div data-v-093c45ac="" className="title">
                                    ส่งฟรีทั่วไทย
                                </div>
                                <div data-v-093c45ac="" className="caption">
                                    ช้อปครบ 3,000.- ขึ้นไป
                                </div>
                            </div>
                        </div>
                        <div data-v-093c45ac="" className="service">
                            <div data-v-093c45ac="" className="icon-wrapper"><a data-v-093c45ac=""
                                href="/th/pages/3-hours-speed-service" className="icon-link" target="_blank">
                                <img
                                    data-v-093c45ac="" src="https://www.bnn.in.th/_nuxt/img/fastdelivery.5454292.svg" alt="fast delivery"
                                    loading="lazy" width="100%" height="100%" className="icon icon-fast-delivery" />
                            </a>
                            </div>
                            <div data-v-093c45ac="" className="info">
                                <div data-v-093c45ac="" className="title">
                                    ส่งด่วนภายใน 3 ชั่วโมง
                                </div>
                                <div data-v-093c45ac="" className="caption">
                                    กรุงเทพฯ และพื้นที่ให้บริการ
                                </div>
                            </div>
                        </div>
                        <div data-v-093c45ac="" className="service">
                            <div data-v-093c45ac="" className="icon-wrapper"><a data-v-093c45ac=""
                                href="/th/pages/click-and-collect" className="icon-link" target="_blank">
                                <img data-v-093c45ac=""
                                    src="https://www.bnn.in.th/_nuxt/img/clickncollect.e1d70d6.svg" alt="click and collect" loading="lazy"
                                    width="100%" height="100%" className="icon icon-click-n-collect" />
                            </a>
                            </div>
                            <div data-v-093c45ac="" className="info">
                                <div data-v-093c45ac="" className="title">
                                    รับเองที่ร้าน
                                </div>
                                <div data-v-093c45ac="" className="caption">
                                    รับสินค้าใกล้บ้าน 600 สาขาทั่วประเทศ
                                </div>
                            </div>
                        </div>
                        <div data-v-093c45ac="" className="service">
                            <div data-v-093c45ac="" className="icon-wrapper"><a data-v-093c45ac="" href="/th/pages/return-policy"
                                className="icon-link" target="_blank">
                                <img data-v-093c45ac=""
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSIyMSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTYtMTdoNTZ2NTZILTZ6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDAuMDIxIDQuMzQzSDQuNDI3TDQuNDkyLjUuMjIyIDQuNzc3bDQuMTI2IDQuNDM2LjA2Mi0zLjg0aDM1LjYwOGMxLjUyNi0uMDAzIDIuNzY3IDEuMjg0IDIuNzc2IDIuODc4djguNTdjLS4wMDkgMS41OTUtMS4yNSAyLjg4MS0yLjc3NiAyLjg3N0gyLjM1NWMtLjI3IDAtLjQ5LjIzLS40OS41MTIgMCAuMjgzLjIyLjUxMi40OS41MTJoMzcuNjY2YzIuMDY1LjAwOCAzLjc0Ni0xLjczMyAzLjc1Ny0zLjg5VjguMjM0Yy0uMDExLTIuMTU4LTEuNjkyLTMuODk4LTMuNzU3LTMuODl6Ii8+PC9nPjwvc3ZnPg=="
                                    alt="refund" loading="lazy" width="100%" height="100%" className="icon icon-refund" />

                            </a>
                            </div>
                            <div data-v-093c45ac="" className="info">
                                <div data-v-093c45ac="" className="title">
                                    เปลี่ยน คืน ง่าย
                                </div>
                                <div data-v-093c45ac="" className="caption">
                                    ภายใน 7 วัน*
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>
        </div>
    );
};

export default LayoutClient;