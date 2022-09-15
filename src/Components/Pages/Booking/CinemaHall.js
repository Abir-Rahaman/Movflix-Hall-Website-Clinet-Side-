import React from "react";
import { Link } from "react-router-dom";

const CinemaHall = () => {
  return (
    <div className="ml-24">
      <h1 className="text-xl font-bold text-green-400 text-center my-20">Those Cinema Hall are available</h1>
      <div className="grid grid-cols-3 gap-y-20 text-center my-20">
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body text-center text-2xl">
            <h2 class="card-body text-center text-2xl">Blockbuster Cinemas</h2>

            <div class="card-actions justify-center">
              <Link to="/bookingCinema">
                {" "}
                <button class="btn btn-primary content-center	 ">Book </button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body text-center text-2xl">
            <h2 class="card-body text-center text-2xl">Eglinton Theatre</h2>

            <div class="card-actions justify-center">
              <Link to="/bookingCinema">
                {" "}
                <button class="btn btn-primary content-center">Book </button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body text-center text-2xl">
            <h2 class="card-body text-center text-2xl">Rex Theatre</h2>

            <div class="card-actions justify-center">
              <Link to="/bookingCinema">
                {" "}
                <button class="btn btn-primary content-center	 ">Book </button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body text-center text-2xl">
            <h2 class="card-body text-center text-2xl">Royal Cinema</h2>

            <div class="card-actions justify-center">
              <Link to="/bookingCinema">
                {" "}
                <button class="btn btn-primary content-center	 ">Book </button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body text-center text-2xl">
            <h2 class="card-body text-center text-2xl">CineScope</h2>

            <div class="card-actions justify-center">
              <Link to="/bookingCinema">
                {" "}
                <button class="btn btn-primary content-center	 ">Book </button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body text-center text-2xl">
            <h2 class="card-body text-center text-2xl">Shyamoli Cinema</h2>

            <div class="card-actions justify-center">
              <Link to="/bookingCinema">
                {" "}
                <button class="btn btn-primary content-center	 ">Book </button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body text-center text-2xl">
            <h2 class="card-body text-center text-2xl">Star Cineplex</h2>

            <div class="card-actions justify-center">
              <Link to="/bookingCinema">
                {" "}
                <button class="btn btn-primary content-center	 ">Book </button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body text-center text-2xl">
            <h2 class="card-body text-center text-2xl">Lion Cinemas</h2>

            <div class="card-actions justify-center">
              <Link to="/bookingCinema">
                {" "}
                <button class="btn btn-primary 	 ">Book </button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body text-center text-2xl">
            <h2 class="card-body text-center text-2xl">Monihar</h2>

            <div class="card-actions justify-center">
              <Link to="/bookingCinema">
                {" "}
                <button class="btn btn-primary content-center	 ">Book </button>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaHall;
