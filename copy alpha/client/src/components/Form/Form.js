import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { creat_post } from "../../js/actions/postActions";
import FileBase64 from "react-file-base64";

function Formm() {
  const user = useSelector((state) => state.authReducer.user);

  const [creator, setCreator] = useState(`${user.name} ${user.lastName}`);
  const [name_ref, setName_ref] = useState("");
  const [marque, setMarque] = useState("");
  const [tags, setTags] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [review_video, setReview_video] = useState("");
  const [game_played, setGame_played] = useState("");
  const [email, setEmail] = useState(user.email);
  const [userid, setUseridid] = useState(user._id);
  const [Photo, setPhoto] = useState("");

  const dispatch = useDispatch();
  const handlpost = () => {
    const newPost = {
      userid,
      email,
      creator,
      name_ref,
      marque,
      tags,
      prix,
      description,
      review_video,
      game_played,
      Photo,
    };
    dispatch(creat_post(newPost));

    setCreator("");
    setName_ref("");
    setMarque("");
    setTags("");
    setPrix("");
    setDescription("");
    setReview_video("");
    setGame_played("");
    setPhoto("");
  };

  return (
    <Form
      style={{
        width: "500px",
      }}
    >
      <Label for="Creator">Creator</Label>
      <Input
        type="text"
        name="Creator"
        placeholder="Creator"
        value={creator}
        //onChange={(e) => setCreator(e.target.value)}
      />
      <Label for="name_ref">name_ref</Label>
      <Input
        type="text"
        name="name_ref"
        placeholder="name_ref"
        value={name_ref}
        onChange={(e) => setName_ref(e.target.value)}
      />
      <Label for="marque">marque</Label>
      <Input
        type="text"
        name="marque"
        placeholder="marque"
        value={marque}
        onChange={(e) => setMarque(e.target.value)}
      />
      <Label for="tags">tags</Label>
      <Input
        type="text"
        name="tags"
        placeholder="tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <Label for="prix">prix</Label>
      <Input
        type="Number"
        name="prix"
        placeholder="prix"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
      />
      <Label for="description">description</Label>
      <Input
        type="textarea"
        name="description"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Label for="review_video">review_video</Label>
      <Input
        type="text"
        name="review_video"
        placeholder="review_video"
        value={review_video}
        onChange={(e) => setReview_video(e.target.value)}
      />
      <Label for="game_played">game_played</Label>
      <Input
        type="text"
        name="game_played"
        placeholder="game_played"
        value={game_played}
        onChange={(e) => setGame_played(e.target.value)}
      />

      <FormGroup>
        <Label for="exampleCustomFileBrowser">Photo</Label>
      </FormGroup>

      <Button onClick={handlpost}>Submit</Button>
    </Form>
  );
}

export default Formm;
