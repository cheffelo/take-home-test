import Link from "next/link";


export default function Home() {
  return (
      <main className="p-4">
        <h1>
          <strong>Take-home test</strong>
        </h1>

        <p>
          Choose <em>one</em> task:
        </p>

        <section>
          <ol className="space-y-4">
            <li>
              <header>
                <strong>Task 1</strong>
              </header>
              <p>
                Implement the <code>ProductCard</code> component. It should render
                the product information, like <code>productName</code>,{" "}
                <code>productImage</code> and <code>stock</code>. It should also
                have a button to add/remove from the basket. Since we are not
                providing a design alongside this task, the functionality,
                responsiveness and semantics will be weighed more. The{" "}
                <code>ProductCard</code> is already rendered through{" "}
                <code>ProductList</code>, and included on the{" "}
                <Link href="/store">store</Link> page.
              </p>
              <p>

                You should also implement the function to remove a
                product from the basket in the <code>Basket</code> component.
              </p>
              <p>
                <strong>Bonus task: </strong>  Implement increment/decrement product quantity for basket products
              </p>
            </li>
            <li>
              <p>
                <strong>Task 2</strong>
              </p>
              <p>
                Implement pagination in the <code>/products</code> api, as well as
                in the <code>ProductList</code> component.
              </p>
            </li>
          </ol>
        </section>

        <section>
          <header>
            <strong>Additional information</strong>
          </header>

          <p>
            You are free to implement the tasks in either JavaScript or
            TypeScript. And you can also ignore TailwindCSS and use any other
            preferred way of styling.
          </p>

          <p>
            The <Link href="/store">store</Link> page is already implemented, and
            all the components required for these tasks are there.
          </p>
        </section>

        <section>
          <h2>
            <strong>Resources</strong>
          </h2>

          <ul>
            <li>
              <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Next.js docs
              </a>
            </li>

            <li>
              <a
                  href="https://redux-toolkit.js.org/usage/usage-guide"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Redux Toolkit docs
              </a>
            </li>

            <li>
              <a
                  href="https://redux-toolkit.js.org/rtk-query/usage/mutations"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Redux Toolkit Query (mutations)
              </a>
            </li>

            <li>
              <a
                  href="https://tailwindcss.com/docs/installation"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                TailwindCSS Docs
              </a>
            </li>
          </ul>
        </section>
      </main>
  );
}