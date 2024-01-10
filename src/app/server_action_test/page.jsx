const { addPost, deletePost } = require("@/lib/action");
// const { sayHello } = require("@/lib/action");

const ServerActionTestPage = () => {
  // const actionInConponent = async () => {
  //   "use server";

  //   console.log("Server Action works!");
  // };

  return (
    <div>
      {/* <form action={actionInConponent}>
        <button>Test me</button>
      </form> */}
      <form style={{ color: "#000" }} action={addPost}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="desc" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button style={{ backgroundColor: `var(--textSoft)` }}>Create</button>
      </form>

      <form style={{ color: "#000" }} action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button style={{ backgroundColor: `var(--textSoft)` }}>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
