import React from "react";

const commentsData = [
  {
    name: "Akshay",
    text: "Lore ipsum",
    replies: [],
  },
  {
    name: "Akshay",
    text: "Lore ipsum",
    replies: [
      {
        name: "Akshay",
        text: "Lore ipsum",
        replies: [],
      },
      {
        name: "Akshay",
        text: "Lore ipsum",
        replies: [
          {
            name: "Akshay",
            text: "Lore ipsum",
            replies: [
              {
                name: "Akshay",
                text: "Lore ipsum",
                replies: [
                  {
                    name: "Akshay",
                    text: "Lore ipsum",
                    replies: [
                      {
                        name: "Akshay",
                        text: "Lore ipsum",
                        replies: [
                          {
                            name: "Akshay",
                            text: "Lore ipsum",
                            replies: [
                              {
                                name: "Akshay",
                                text: "Lore ipsum",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay",
    text: "Lore ipsum",
    replies: [
      {
        name: "Akshay",
        text: "Lore ipsum",
        replies: [
          {
            name: "Akshay",
            text: "Lore ipsum",
            replies: [],
          },
          {
            name: "Akshay",
            text: "Lore ipsum",
            replies: [
              {
                name: "Akshay",
                text: "Lore ipsum",
                replies: [
                  {
                    name: "Akshay",
                    text: "Lore ipsum",
                    replies: [
                      {
                        name: "Akshay",
                        text: "Lore ipsum",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay",
    text: "Lore ipsum",
    replies: [],
  },
  {
    name: "Akshay",
    text: "Lore ipsum",
    replies: [
      {
        name: "Akshay",
        text: "Lore ipsum",
        replies: [
          {
            name: "Akshay",
            text: "Lore ipsum",
            replies: [
              {
                name: "Akshay",
                text: "Lore ipsum",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="px-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
