function addUser(user) {
  firebase.firestore().collection("Users").add(
    {
      email: user.email,
      name: user.name,
      pass: user.pass
    }
  );
}

async function login(email, pass){

  let login = false;
  const res = await firebase.firestore().collection("Users").get();
  res.docs.forEach((doc) => {
    if (doc.data().email == email || doc.data().name == email){  
      // document.getElementById("alert").innerText = `
      // Email: ${doc.data().email} 
      // Name: ${doc.data().name}
      // Password: ${doc.data().pass}`;
      // curId = doc.id;
      // console.log(curId);
      // console.log(doc.data().email == email, doc.data().pass == pass)
      if (doc.data().pass == pass){
        login = true;
      }
    }
  });
  return login;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export {addUser, login, validateEmail};