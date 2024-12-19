import icons from "../../../assets/icons/icons";
import images from "../../../assets/images/images";
import "./HomeBody.scss";

function HomeBody() {
  return (
    <div className="home-body">
      <div className="banner">
        <div className="info">
          <div className="text">
            <h1>Arcane</h1>
            <p>
              Amid the stark discord of twin cities Piltover and Zaun, two
              sisters fight on rival sides of a war between magic technologies
              and clashing convictions. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Vero alias tenetur illum. Voluptatem
              exercitationem unde provident placeat vel dolore eos. Praesentium
              enim minus impedit dolore esse excepturi qui, earum quia! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Dolor, quos?
            </p>
          </div>
          <button>Watch Now</button>
        </div>
        <div className="movie-image">
          <div className="background"></div>
          <img src={icons.play_icon} className="play-icon" alt="" />
          <img src={images.poster} className="poster" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
