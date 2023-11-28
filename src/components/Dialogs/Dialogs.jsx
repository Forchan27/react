import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"


let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'}
];

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'What are you doing?'},
  {id: 4, message: 'What are you doing?'},
  {id: 5, message: 'What are you doing?'},
  {id: 6, message: 'What are you doing?'},
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = messages.map(m => <Message message={m.message}/>)

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
