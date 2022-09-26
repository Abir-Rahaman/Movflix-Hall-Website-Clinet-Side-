import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddMovie = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgKey = "69fb380d3c03cfe1603dcae97afcc89a";

  const onSubmit = async (data) => {
    const formData = new FormData();
    const image = data.image[0];
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const image = result.data.url;
          const movie = {
            MovieName: data.MovieName,
            DIRECTOR: data.DIRECTOR,
            RUNTIME: data.RUNTIME,
            CAST: data.CAST,
            GENRE: data.GENRE,
            ticketPrice: data.ticketPrice,
            slots: data.slots,
            Language: data.Language,
            RELEASEDATE: data.RELEASEDATE,
            details: data.details,
            image: image,
          };
          fetch("http://localhost:5000/movie", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(movie),
          })
            .then(res=> res.json())
            .then(inserted => {
              if (inserted) {
                toast.success(" Movie Added Successfully Done");
                console.log(inserted)
              } else {
                toast.error("Already Added This Movie On Database");
              }
            
          
              reset();
            });
        }
      });

    //  const ClientUrl = `http://localhost:5000/movie`
    //  fetch(ClientUrl ,{
    //   method:'POST',
    //   headers:{
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    //  })
    //  .then(res => res.json())
    //  .then(result =>{
    //   toast.success("Movie Added Successfully for User")
    //   console.log(result);
    //  })
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-20 justify-center">
          <div className="">
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("MovieName", {
                  required: {
                    value: true,
                    message: "Movie Name is required",
                  },
                })}
                type="text"
                placeholder="Movie Name"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.Movie?.type === "required" && <span class="label-text-alt text-red-600"> {errors.Movie.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("DIRECTOR", {
                  required: {
                    value: true,
                    message: "Director Name is required",
                  },
                })}
                type="text"
                placeholder="Director Name"
                class="input  input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.Director?.type === "required" && <span class="label-text-alt text-red-600"> {errors.Director.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("RUNTIME", {
                  required: {
                    value: true,
                    message: "Movie Duration is required",
                  },
                })}
                type="text"
                placeholder="Movie Duration"
                class="input  input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.Duration?.type === "required" && <span class="label-text-alt text-red-600"> {errors.Duration.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("CAST", {
                  required: {
                    value: true,
                    message: "Cast is required",
                  },
                })}
                type="text"
                placeholder="Cast Name"
                class="input  input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.Cast?.type === "required" && <span class="label-text-alt text-red-600"> {errors.Cast.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("GENRE", {
                  required: {
                    value: true,
                    message: "Genre is required",
                  },
                })}
                type="text"
                placeholder="Movie Type"
                class="input  input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.GENRE?.type === "required" && <span class="label-text-alt text-red-600"> {errors.GENRE.message} </span>}
              </label>
            </div>
          </div>
          <div className="">
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("Language", {
                  required: {
                    value: true,
                    message: "Language is required",
                  },
                })}
                type="text"
                placeholder="Movie Language"
                class="input  input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.Language?.type === "required" && <span class="label-text-alt text-red-600"> {errors.Language.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("RELEASEDATE", {
                  required: {
                    value: true,
                    message: "Release date is required",
                  },
                })}
                type="text"
                placeholder="Release Date"
                class="input  input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.RELEASEDATE?.type === "required" && <span class="label-text-alt text-red-600"> {errors.RELEASEDATE.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("ticketPrice", {
                  required: {
                    value: true,
                    message: "ticketPrice date is required",
                  },
                })}
                type="text"
                placeholder="Ticket Per Price"
                class="input  input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.ticketPrice?.type === "required" && <span class="label-text-alt text-red-600"> {errors.ticketPrice.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("slots", {
                  required: {
                    value: true,
                    message: "Movie Schedule is required",
                  },
                })}
                type="text"
                placeholder="Movie Schedule"
                class="input  input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.Schedule?.type === "required" && <span class="label-text-alt text-red-600"> {errors.Schedule.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("details", {
                  required: {
                    value: true,
                    message: "Movie info is required",
                  },
                })}
                type="text"
                placeholder="Movie info"
                class="input  input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.details?.type === "required" && <span class="label-text-alt text-red-600"> {errors.details.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs">
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "Movie Poster is required",
                  },
                })}
                type="file"
                placeholder="Movie Poster"
                class="input  input-bordered w-full max-w-xs pt-2"
              />
              <label class="label">
                {errors.picture?.type === "required" && <span class="label-text-alt text-red-600"> {errors.picture.message} </span>}
              </label>
            </div>
          </div>
        </div>

        <div class="form-control mt-6 mx-64 pb-8">
          <input
            className="btn border-4 px-6 py-2 bg-transparent  text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700"
            type="submit"
            value="Add Movie"
          />
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
