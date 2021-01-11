function solve() {
   let sendMessage = document.getElementById('send');
   let inputMessage = document.getElementById('chat_input')
   let chatMessage = document.getElementById('chat_messages');
   sendMessage.addEventListener('click', function (e) {
      let messsage = inputMessage.value;
      let newMessage = document.createElement('div');
      newMessage.classList.add('message');
      newMessage.classList.add('my-message');
      newMessage.textContent = messsage;
      chatMessage.appendChild(newMessage);
      inputMessage.value = ''
   })
}