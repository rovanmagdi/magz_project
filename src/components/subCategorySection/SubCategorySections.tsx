import React, { useEffect } from "react";
import CategoryRectCard from "../categoryRectCard/CategoryRectCard";
import CategorySquareCard from "../categorySquareCard/CategorySquareCard";
import PostCard from "../postCard/PostCard";
import { useSelector } from "react-redux";
import Post from "../../types/post";
import SmallPostCard from "../smallPostCard/SmallPostCard";
import { CircularProgress, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CategoryLabelBox } from "../../styled/styledBox";
import { HorizontalLineBox } from "../../styled/styledBox";

export default function SubCategorySection() {
  const { catergory } = useSelector((state: any) => state);

  
  const posts = catergory;
  const filteredCategories: any = [];

  // const {posts}=useSelector((state:any) =>state);
  // console.log(posts)

 
  
  if (catergory) {
    console.log("Here");
    
    catergory.forEach((category: any) => {
      console.log("category");

      filteredCategories[category.subCategory]
        ? filteredCategories[category.subCategory].push(category)
        : (filteredCategories[category.subCategory] = [category]);
    });
    //  console.log(filteredCategories["football"]?.slice(2, 6))
    //  console.log(filteredCategories["football"])
     console.log(Object.keys(filteredCategories))
  }
  
  

  const subCategories = Object.keys(filteredCategories);


  return (
    <>
      {subCategories &&
        subCategories.map((item) => {
          return (
            <Box mb={5}>
              <Box position={"relative"} mb={2} mt={7}>
                <CategoryLabelBox sx={{ backgroundColor: "#272727" }}>
                  {item}
                </CategoryLabelBox>
                <HorizontalLineBox
                  sx={{ backgroundColor: "#272727" }}
                ></HorizontalLineBox>
              </Box>
              {filteredCategories[item] ? (
                <>
                  <Grid
                    container
                    spacing={1.5}
                    columns={12}

                    // ml={3}
                    // gap={1}
                    // sx={{ minHeight: "300px" }}
                  >
                    <Grid
                      item
                      container
                      xs={12}
                      spacing={1.5}
                      justifyContent={"center"}
                    >
                      <Grid item md={7} sm={5.5} xs={11}>
                        <PostCard
                          {...filteredCategories[item][0]}
                          width={"100%"}
                          key={posts[0].id}
                        />
                      </Grid>
                      <Grid item md={4.5} sm={5.5} xs={11}>
                        <PostCard
                          {...filteredCategories[item][1]}
                          width={"100%"}
                          key={posts[0].id}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      container
                      gap={1}
                      justifyContent={"center"}
                    >
                      {filteredCategories[item].slice(2, 6).map((post: any) => {
                        return (
                          <>
                            <Grid item md={2.8} sm={5.5} xs={11}>
                              <SmallPostCard
                                {...post}
                                key={post.id}
                                width={"100%"}
                              />
                            </Grid>
                          </>
                        );
                      })}
                    </Grid>
                  </Grid>
                </>
              ) : (
                <CircularProgress />
              )}
            </Box>
          );
        })}
    </>
  );
}
