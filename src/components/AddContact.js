import React, { useState } from "react";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contact.name.trim() === "" || contact.email.trim() === "") {
      alert("All fields are mandatory");
      return;
    }

    addContactHandler(contact);
    setContact({ name: "", email: "" });
  };

  return (
    <div className="ui main">
      <h1>Add Contact</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <button className="ui button blue" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;

// import React from "react";

// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   add = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("All the fields are mandatory");
//       return;
//     }
//     this.props.addContactHandler(this.state);
//     this.setState({ name: "", email: "" });
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div className="ui main">
//         <h1> Add Contact</h1>
//         <h2> Add Contact</h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <button className=" ui button blue">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;
