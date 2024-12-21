import styles from '@/styles/Home.module.css'
export default function ContactMe() { 
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7f3089a9-5160-4784-ab5c-cfea271cdd8a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        alert("sent successfully");
    }
}

return (
<>
  <form onSubmit={handleSubmit} className={styles.form}>
  
  
  <label htmlFor="email"></label>
          <input
          name="email"
            id="email"
            type="email"
            placeholder='Email:'
            className={styles.mail}
            required
          />
          <label htmlFor="message"></label>
          <textarea
          name="message"
            id="message"
            type="text"
            rows="4"
            placeholder='Message:'
            className={styles.message}
            required
          />
    <button type="submit" className={styles.send}>send</button>
  </form>
</>
);
}