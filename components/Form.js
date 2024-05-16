import { useRouter } from "next/router";
import styled from "styled-components";
import { nanoid } from "nanoid";

export default function Form({ onSubmit, defaultData }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // const id = defaultData.id || nanoid();
    const id = defaultData?.id || nanoid();
    const bookData = { ...data, id };

    onSubmit(bookData);

    router.push("/");
  }

  return (
    <>
      <StyledHeadline>Add Book</StyledHeadline>
      <StyledContainer>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={defaultData?.title}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            defaultValue={defaultData?.author}
          />
          <label htmlFor="publishYear">publishYear</label>
          <input
            type="text"
            id="publishYear"
            name="publishYear"
            defaultValue={defaultData?.publishYear}
          />
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={defaultData?.description}
          />
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            defaultValue={defaultData?.genre}
          />
          <label htmlFor="pages">Pages</label>
          <input
            type="text"
            id="pages"
            name="pages"
            defaultValue={defaultData?.pages}
          />
          <label htmlFor="cover">Cover</label>
          <input
            type="text"
            id="cover"
            name="cover"
            defaultValue={defaultData?.cover}
          />
          <StyledButton type="submit">Add Book</StyledButton>
        </StyledForm>
      </StyledContainer>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;

  padding: 3rem;
  gap: 1rem;
`;

const StyledHeadline = styled.h2`
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: skyblue;

  padding: 1rem;
  border-radius: 5px;

  bottom: 2rem;
  left: ${({ $isHomepage }) => ($isHomepage ? null : "2rem")};
  right: ${({ $isHomepage }) => ($isHomepage ? "2rem" : null)};

  text-decoration: none;

  &:hover {
    color: black;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
`;
