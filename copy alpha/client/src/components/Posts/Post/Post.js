import React, { useState } from "react";

import review_logo from "./unnamed.jpg";
import EditPostModal from "./editPostModal";
//useselctor
import { useDispatch, useSelector } from "react-redux";
import { deletepp, likeupdate } from "../../../js/actions/postActions";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
const Post = ({ e }) => {
  const user = useSelector((state) => state.authReducer.user);
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  //console.log(user._id);
  //console.log(e._id);
  const dispatch = useDispatch();
  const handldelete = () => {
    // console.log("handledelte");
    dispatch(deletepp(e._id, user._id));
  };
  //like disoatch
  const handllike = () => {
    isAuth && dispatch(likeupdate(e._id));
  };
  return (
    <CardDeck>
      <Card>
        <CardBody>
          <CardTitle tag="h5">creator:{e.creator}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            email: {e.email}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            name ref : {e.name_ref}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            marque : {e.marque}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            tags : {e.tags}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            prix : {e.prix}
          </CardSubtitle>
          <CardText>description:{e.description}</CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            review video: {e.review_video}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            game played: {e.game_played}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Date: {e.date_post}
          </CardSubtitle>
          <Button onClick={handllike} outline color="info">
            like :{e.like}
          </Button>
          {isAuth && e.userid == user._id && <EditPostModal e={e} />}
          {isAuth && e.userid == user._id && (
            <Button onClick={handldelete}>Delete Post</Button>
          )}
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Post;
