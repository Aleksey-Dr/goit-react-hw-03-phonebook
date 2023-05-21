12.05.2023
Basic initial settings #1
1. Created this repository by React homework template (https://github.com/goitacademy/react-homework-template).
2. Set Settings > Actions > General:
   Workflow permissions:
   🔘 Read and write permissions (Workflows have read and write permissions in the repository for all scopes)
   ☑  Allow GitHub Actions to create and approve pull requests
3. Changed: "homepage": "https://your_username.github.io/your_repo_name/".

Basic initial settings #2
1. Set Settings > Pages:
   Branch: gh-pages from folder "root"
2. Code > About > ⚙ > Website > ☑ Use your GitHub Pages website (https://aleksey-dr.github.io/goit-react-hw-03-phonebook/).

21.05.2023
Adding and configuring tools
1. npm i prop-types.
2. npm i clsx.
3. npm i react-icons.

Coppy the files from "goit-react-hw-02-phonebook"
1. Copied "contactForm".
2. Copied "contactsItem".
3. Copied "contactList".
4. Copied "filter".
5. Copied "data".
6. Update "App.jsx".

Add seving phone book contacts to localStorage
1. When you add or remove a contact, the contacts are saved to local storage.
2. Added componentDidUpdate to the "App,jsx" (for save contacts to "localStorage").
3. Added condition to the componentDidUpdate.
4. Added localStorage.setItem('contacts', JSON.stringify(this.state.contacts)).
5. When app load contacts, if is they, they read from "localStorage" and write to the state.
6. Added localStorage.getItem('contacts').
7. Added JSON.parse(contacts).
8. Added condition to check if data is in the state.
9. Added write data from "licalStorage" to the state.
10. Used methods of "life cicle".