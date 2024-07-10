/* eslint-disable react/no-unescaped-entities */

// Images
import LogoBlueBG from "../../assets/logos/logo-blue-bg.png";

const AboutUs = () => {
  return (
    <div className="h-screen">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={LogoBlueBG}
            className="sm:max-w-sm max-w-72 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-6xl font-bold sm:px-0 px-4 ">About Us</h1>
            <p className="sm:py-6 sm:px-0 p-4">
              Our passion for preserving the golden age of video games drives us
              to curate a unique collection of cartridges, consoles, and
              memorabilia from the '70s, '80s, and '90s. Whether you're a
              seasoned gamer looking to relive your favorite childhood
              adventures or a new enthusiast eager to discover iconic titles,
              Pixel Paradise offers an immersive experience that bridges
              generations. We pride ourselves on offering not only a wide
              selection of pristine, fully-functional games and systems but also
              exceptional customer service with knowledgeable staff who share
              your love for retro gaming. Step back in time with us and
              rediscover the magic that defined an era—because some games never
              go out of style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
