import React from "react";

const BookingModal = ({modalMovie}) => {
  const {MovieName} = modalMovie;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">You want to see {MovieName} Movie. </h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
