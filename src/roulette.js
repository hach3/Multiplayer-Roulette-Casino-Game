const socket = io();

jQuery(document).on('click', '.entry_btn', function() {
  socket.emit('new bet', {amount: 10, color: "red"})
});