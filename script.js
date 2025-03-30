flatpickr("#checkin", {
  dateFormat: "Y-m-d",
  minDate: "today",
  onClose: function (selectedDates, dateStr) {
    document.getElementById("checkout").flatpickr({
      minDate: dateStr,
    });
  },
});

flatpickr("#checkout", {
  dateFormat: "Y-m-d",
  minDate: "today",
});
