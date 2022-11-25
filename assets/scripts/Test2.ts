import { _decorator, Component, Node, Label } from 'cc';
import { addScore, STORE } from './NewComponent';
const { ccclass, property } = _decorator;

@ccclass('Test2')
export class Test2 extends Component {
    @property(Label)
    text: Label = null;

    start() {
        STORE.storePersist.subscribe(() => {
            this.text.string = STORE.storePersist
                .getState()
                .todos.value.toString();
        });
    }

    update(deltaTime: number) {}

    onClick() {
        STORE.storePersist.dispatch(
            addScore({
                score: 2,
            })
        );
    }
}
