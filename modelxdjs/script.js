

async function getImage(model, filename) {
   
    var img = new Image();
    //img.src = 'https://lcdn.altex.ro/wysiwyg/poze_produse_content/Entertainment/Xbox_One/Assassin_s-Creed-Origins-Screenshot-01.jpg';
    img.src = filename
   
   
    img.crossOrigin = 'anoymous'
 
 
    
    img.onload = () => {
        console.log(filename)
        var pic1 = tf.browser.fromPixels(img, 3);

        pic1 = tf.image.resizeBilinear(pic1, [180, 180]).div(tf.scalar(255))

        let picarray = []

        picarray.push( pic1.expandDims(0) )
    
        const prediction = model.predict(picarray)

        prediction.softmax().print();
    }
  }


async function testModel() {


    const model = await tf.loadLayersModel('tensor/model.json');


    getImage(model, 'https://th.bing.com/th/id/OIP.qCzRLCgSsgUJ4hkMy_6IQwHaEK?pid=ImgDet&rs=1')

    getImage(model, 'ac21.jpeg')
    getImage(model, 'ac11.jpeg')

    getImage(model, 'rs337.jpg')
    getImage(model, 'rs338.jpg')





};

testModel();