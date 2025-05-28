export const data =[
    {
        
        name: "Morning Glow Tea",
        description: "Good for: Boosting your morning energy while supporting skin health and mental clarity. Infusion of nettle leaves, lemon balm, lemongrass, moringa leaves, calendula and rose buds, goji berries, and Japanese matcha green tea.",
        price: 5,
        stock: 35,
        category: "Teas and Infusers",
        img: "../img/tea-morningGlow.png"
    },
    {
        
        name: "Citrus Bloom Tea",
        description: "Perfect to enjoy at any time of the day: Japanese sencha green tea with pieces of orange, lemon, and sunflower sprouts. A super fresh blend with a vibrant citrus aroma.",
        price: 5,
        stock: 35,
        category: "Teas and Infusers",
        img: "../img/tea-citrusBloom.png"
    },
    {
        
        name: "Yellow Whisper Tea",
        description: "Good for Uplifting your mood and enhancing moments of quiet reflection. A blend of yellow tea and green tea with peach pieces, sunflower petals, and jasmine blossoms. An exclusive, limited-harvest tea with a delightful aroma and flavor.",
        price: 5,
        stock: 35,
        category: "Teas and Infusers",
        img: "../img/tea-yellowWhisper.png"
    },
    {
        
        name: "Camomile Candle",
        description: "Wrap yourself in the gentle warmth of chamomile. This candle brings a quiet calm to your space, inviting you to slow down, breathe deeply, and enjoy the simple rhythm of the present moment.",
        price: 15,
        stock: 35,
        category: "Aromatherapy and Well-being",
        img: "../img/candle-camomila.png"
    },
    {
        
        name: "Lavender Candle",
        description: "Infused with the soothing essence of lavender, this candle creates a tranquil atmosphere perfect for mindfulness, restful evenings, and unwinding after a long day. Light it and let your mind soften into stillness.",
        price: 15,
        stock: 35,
        category: "Aromatherapy and Well-being",
        img: "../img/candle-lavanda.png"
    },
    {
        
        name: "Vanilla Candle",
        description: "Soft and comforting, the sweet aroma of vanilla evokes a sense of home, grounding you in the now. Ideal for slow mornings, journaling, or simply doing nothing at all—on purpose.",
        price: 15,
        stock: 35,
        category: "Aromatherapy and Well-being",
        img: "../img/candle-vanilla.png"
    },
    {
        
        name: "Sandalwood Candle",
        description: "Earthy and meditative, sandalwood sets the tone for introspection and serenity. Light this candle to create your personal zen ritual—a moment to reconnect with your breath, your body, and your inner peace.",
        price: 15,
        stock: 35,
        category: "Aromatherapy and Well-being",
        img: "../img/candle-sandalo.png"
    },
    {
        
        name: "Classic Softcover Notebook",
        description: "Minimalist and simple, this softcover notebook is perfect for everyday journaling. With 60 blank pages of smooth 100gsm paper, it invites calm reflection and creative flow.",
        price: 10,
        stock: 35,
        category: "Journaling and Creativity",
        img: "../img/notebook-caramel.png"
    },
    {
        
        name: "Wrap Journal with Button Closure",
        description: "Crafted in dark brown leather with 400 thick pages and a charming button-and-cord wrap closure, it’s designed for long-term musings, stories, and slow reflections.",
        price: 35,
        stock: 35,
        category: "Journaling and Creativity",
        img: "../img/notebook-button.png"
    },
    {
        
        name: "Wildflower Embroidered Journal",
        description: "Celebrate nature’s beauty with this charming hand-embroidered journal. Inspired by the slow rhythms of the seasons, it’s the perfect place to capture thoughts, sketches, and daydreams. Ideal for mindful moments.",
        price: 35,
        stock: 35,
        category: "Journaling and Creativity",
        img: "../img/notebook-flower.png"
    },
    {
        
        name: "Mini Moss & Terracotta Notebooks",
        description: "Pocket-sized and playful, these recycled notebooks are perfect for those of you who don't identify with writing extensive reflections in a journal, but would still like to have a place to jot down thoughts or quotes.",
        price: 5,
        stock: 35,
        category: "Journaling and Creativity",
        img: "../img/notebook-small.png"
    },
]

export const fetchData = ()=>{
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(!error){
                resolve(data)
            }else{
                reject("Failed to load data")
            } 
        },2000); 
    });
};

export const getItem = (id) =>{
    return new Promise( (resolve)=>{
        setTimeout(()=>{
            let product = data.find((item)=> item.id === id)
            resolve(product)
            },2000
        )
    })
}