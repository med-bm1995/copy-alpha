import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPosts, likeupdate } from "../../../js/actions/postActions";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Form,
  Input,
} from "reactstrap";

const EditPostModal = ({ e }) => {
  const [id, setID] = useState(e._id);
  const [creator, setCreator] = useState(e.creator);
  const [name_ref, setName_ref] = useState(e.name_ref);
  const [marque, setMarque] = useState(e.marque);
  const [tags, setTags] = useState(e.tags);
  const [prix, setPrix] = useState(e.prix);
  const [description, setDescription] = useState(e.description);
  const [review_video, setReview_video] = useState(e.review_video);
  const [game_played, setGame_played] = useState(e.game_played);
  const [Photo, setPhoto] = useState(e.date_post);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const handleditpost = () => {
    const postEditeD = {
      // id,
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
    dispatch(editPosts(e._id, postEditeD));

    toggle();
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        modale
      </Button>{" "}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <Label for="Creator">Creator</Label>
            <Input
              type="text"
              name="Creator"
              placeholder="Creator"
              value={creator}
              // onChange={(e) => setCreator(e.target.value)}
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

            <Button onClick={handleditpost}>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditPostModal;
