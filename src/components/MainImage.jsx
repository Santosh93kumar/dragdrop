
import Wireframe1 from "../assets/Wireframe1.png"; 

const MainImage = () => {
  return (
    <section className="flex justify-center py-10 bg-gray-100">
      <img src={Wireframe1} alt="Dashboard Preview" className="w-full max-w-5xl rounded-lg" />
    </section>
  );
};

export default MainImage;
