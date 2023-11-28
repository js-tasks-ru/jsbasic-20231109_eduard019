function makeFriendsList(friends) {
  // преобразование массива друзей в стандартный HTML список
  const ul = document.createElement('ul');

    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = `${friend.firstName} ${friend.lastName}`;
        ul.appendChild(li);
    });

    return ul;
}
    

