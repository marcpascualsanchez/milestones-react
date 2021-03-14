import { useState } from "react";
import "./style.css";

function handleSubmit(event: any, value: any) {
  console.log("onsubmit value ", value);
  event.preventDefault();
}

export default function Timeline() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | undefined>("");
  const [date, setDate] = useState("");
  const reader = new FileReader();

  reader.onloadend = function () {
    setImage(reader.result?.toString());
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, { title, description, image, date })}
    >
      <label>
        Title
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Image
        <input
          type="file"
          onChange={(e) =>
            e.target.files ? reader.readAsDataURL(e.target.files[0]) : null
          }
        />
      </label>
      <label>
        Date
        <input required type="date" onChange={(e) => setDate(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
