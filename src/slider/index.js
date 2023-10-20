import createEl from "../component/index.js"
import'../component/index.js'
import './style.css'



const slider = () => {

    const sliderEl = createEl({
        element:'section',
        className:`splide w-full h-5/6`,
        ariaLabelledby:`carousel-heading`,
        children:[createEl({
            element:'h2',
            id:`carousel-heading`,
            className:`text-center mt-5 text-xl font-semibold mb-6`,
            innerHTML:`Splide Musics`,
        }) , createEl({
            element:'div',
            className:`splide__track p-5 h-96`,
            children:createEl({
                element:`ul`,
                className:`splide__list h-fit flex gap-2 `,
                children: [createEl({
                    element:'li',
                    className:`splide__slide flex gap-2 h-fit justify-center `,
                    children:[createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/adele.jpg'
                        }), createEl({
                            element:'p',
                            innerHTML:`Adele - Hello`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/em & 50 cent.jfif'
                        }), createEl({
                            element:'p',
                            innerHTML:`Eminem & 50Cent - You don't know`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/Lose_Yourself.jpg'
                        }), createEl({
                            element:'p',
                            innerHTML:`Eminem - Lose Yourself`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/lana.png'
                        }), createEl({
                            element:'p',
                            innerHTML:`Lana Del Rey - SummerTime Sadness`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/the weekend.jpg'
                        }), createEl({
                            element:'p',
                            innerHTML:`The Weekend - Starboy`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/snoop.webp'
                        }), createEl({
                            element:'p',
                            innerHTML:`Snoop Dogg - From the D 2 the LBC`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/alec.jfif'
                        }), createEl({
                            element:'p',
                            innerHTML:`Alec Benjamin - Commentary`
                        })]
                    })]
                }),createEl({
                    element:'li',
                    style:``,
                    className:`splide__slide flex gap-2 h-fit justify-center `,
                    children:[createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/maybe on the mon.jfif'
                        }), createEl({
                            element:'p',
                            innerHTML:`aaron - Maybe on the moon`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/harry.jfif'
                        }), createEl({
                            element:'p',
                            innerHTML:`Harry Style - As it was`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56` ,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/call.png'
                        }), createEl({
                            element:'p',
                            innerHTML:`The Weekend - Call ou my name`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/easy on me.jfif'
                        }), createEl({
                            element:'p',
                            innerHTML:`Adele - Easy on me`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/drake.jpg'
                        }), createEl({
                            element:'p',
                            innerHTML:`Drake - One dance`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/pishro.jpg'
                        }), createEl({
                            element:'p',
                            innerHTML:`Pishro - Qabil`
                        })]
                    }),createEl({
                        element:'div',
                        className:`w-56 h-56`,
                        children:[createEl({
                            element:'img',
                            className:`w-full h-full object-cover`,
                            src:'/public/yas.jpg'
                        }), createEl({
                            element:'p',
                            innerHTML:`Yas - Mosafer`
                        })]
                    })]
                })]
            })
        })]
    })
    
    return sliderEl
}



export default slider

