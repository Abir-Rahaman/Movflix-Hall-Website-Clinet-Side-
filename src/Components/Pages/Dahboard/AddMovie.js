import React from 'react';
import { useForm } from 'react-hook-form';

const AddMovie = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
       console.log(data);
     };
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className="flex gap-20 justify-center">
                <div className="">
                <div class="form-control  w-full max-w-xs">
                 
                  <input
                    {...register("Movie", {
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
                    {...register("Director", {
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
                    {...register("Duration", {
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
                    {...register("Cast", {
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
                    {...register("Genre", {
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
                    {errors.Genre?.type === "required" && <span class="label-text-alt text-red-600"> {errors.Genre.message} </span>}
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
                    {...register("Release", {
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
                    {errors.Release?.type === "required" && <span class="label-text-alt text-red-600"> {errors.Release.message} </span>}
                  </label>
                </div>
                <div class="form-control  w-full max-w-xs">
                  <input
                    {...register("Schedule", {
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
                    {...register("Duration", {
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
                    {errors.image?.type === "required" && <span class="label-text-alt text-red-600"> {errors.image.message} </span>}
                  </label>
                </div>
               
                </div>
               </div>
                
                <div class="form-control mt-6 mx-64 pb-20">
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