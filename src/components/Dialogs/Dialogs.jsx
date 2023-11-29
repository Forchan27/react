import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"



// let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
// let messagesElements = messages.map(m => <Message message={m.message}/>)

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
      </div>
      <div className={s.messages}>
        {props.messages.map(m => <Message message={m.message}/>)}
      </div>
    </div>
  );
};

export default Dialogs;
