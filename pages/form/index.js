import React from "react";

const Form = () => {
  const [name, setName] = React.useState("");
  const [brand, setBrand] = React.useState("");

  const onSubmit = () => {
    // const Payload = { name, brand };
    const Message = `[NEW SPK SUBMITTED]%0AName:${name}%0ABrand:${brand}`;
    return fetch(
      `https://api.telegram.org/bot5460751500:AAEev0-hBSJJiDlnU1HyP6wYcyUea3cawfc/sendMessage?chat_id=-689846705&text=${Message}`,
      { method: "POST" }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        location.reload();
      });
  };

  return (
    <form onSubmit={onSubmit} action="#">
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="brand & seri"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
