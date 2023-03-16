import Image from 'next/image';
import styles from '../styles/Home.module.css';

// // This function connects to the other service included in the Architect component to fetch the output "Hello World!"
// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.API_ADDR}`);
//   const hello_world_text = await res.text();
//   return { props: { hello_world_text } };
// } // TODO: attach postgres

export default function Home({ hello_world_text }: { hello_world_text: string }) {
  return (
    <div className={styles.container}>
      <p>
        <a href="//architect.io" target="blank" rel="noopener noreferrer">
          <Image src="https://cdn.architect.io/logo/horizontal.png" width={400} height={59.5} alt="Architect Logo" />
        </a>
      </p>

      <br />

      <form method="post">
        <div className={styles['user-inputs']}>
          <div className={styles['form-control']}>
            <input id="title" type="text" placeholder="Title*"/>
            <p style={{color: 'red', textAlign: 'left'}}></p>
          </div>
          <div className={styles['form-control']}>
            <input id="rating" type="number" placeholder="Rating (1-5)*"/>
            <p style={{color: 'red', textAlign: 'left'}}></p>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />

      <div>
        <table>
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Movie Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>test</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        No entries found
      </div>
      {/* <div className={styles.card}>
        <div className={styles['card-container']}>
          <div id="card-header">
            <h4><b>{ hello_world_text }</b></h4>
          </div>
          <div className={styles['card-content']}>
            <p>You've deployed your app locally. Now what?</p>
            <p>Below are additional steps you can try out with your newly deployed <a target="_blank" rel="noopener noreferrer" href="https://docs.architect.io/tutorial/create-component/">component</a>.</p>
            <ul>
              <li>Check out Hot-reloading</li>
                <ol>
                  <li>Go to <kbd className={styles.cmp_input}>nextjs/pages/index.tsx</kbd> in your project folder and open it.</li>
                  <li>Uncomment line 14 to show the h1 tag, and save the file.</li>
                  <li>The app will automatically apply the new changes! For more info, checkout out our <a target="_blank" rel="noopener noreferrer" href="https://docs.architect.io/">docs</a>.</li>
                </ol>
              <br />
              <li>Deploy your app to the cloud via Architect <b>(Recommended)</b></li>
              <ol>
                <li>Login or register a new Architect account for free at <a target="_blank" rel="noopener noreferrer" href="https://cloud.architect.io/signup">architect.io</a></li>
                <li>Authenticate using the CLI by running the command <kbd className={styles.cmp_input}>architect login</kbd></li>
                <li>Deploy your app to the cloud using the command <kbd className={styles.cmp_input}>architect deploy</kbd></li>
              </ol>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  )
}
