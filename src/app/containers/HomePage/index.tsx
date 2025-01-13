import React, { useEffect } from "react";
import { Dispatch } from "redux";
import styled from "styled-components";
import { useAppDispatch } from "../../redux/hooks";
import AnimeService from "../../services/animeService";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { setAnimePage } from "./homepageSlice";
import HotAnime from "./hotAnime";

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});

const HomePage = (props: IHomePageProps) => {
  const { setAnimePage } = actionDispatch(useAppDispatch());
  const fetchAnimePage = async () => {
    const animePage = await AnimeService.getAnimePage(0).catch((error) => {
      console.log("error", error);
    });
    if (animePage) {
      setAnimePage(animePage);
    }
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <HotAnime/>
    </Container>
  );
};

export default HomePage;
