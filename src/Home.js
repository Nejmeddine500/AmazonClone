import React from "react";
import "./Home.css";
import Product from "./Prodcut";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://geektech.me/wp-content/uploads/2019/03/116dcf994c31c182f70fac3b675a1f26.jpg"
        alt=""
      />

      {/* Product id, title, price rating, image */}
      <div className="home__row">
        <Product
          id="11111"
          title="Floor Cleaning Machines"
          price={110}
          rating={5}
          image="https://www.affde.com/uploads/article/7812/bpd8KChWY0c9Ocvv.jpg"
        />

        <Product
          id="22222"
          title="Swatch intelligent"
          price={49.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="33333"
          title="Professionnel microphone "
          price={69.99}
          rating={3}
          image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-quiz.png"
        />
        <Product
          id="44444"
          title="Micro SD"
          price={10}
          rating={4}
          image="https://www.sellerapp.com/blog/wp-content/uploads/2019/02/electronic-product-photography.png"
        />
        <Product
          id="55555"
          title="Camera"
          price={500}
          rating={5}
          image="https://www.sellerapp.com/blog/wp-content/uploads/2019/02/product-photography-camera.png"
        />
      </div>
      <div className="home__row">
        <Product
          id="66666"
          title="Collection"
          price={1000}
          rating={5}
          image="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/lisfrm3ije0umym8_1625912151.jpeg"
        />
      </div>
    </div>
  );
}

export default Home;
