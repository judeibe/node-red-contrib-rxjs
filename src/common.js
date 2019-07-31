
class NodeRedObservable {
    constructor(node) {
        this.globalContext = node.context().global;
        this.observableName = "observable." + node.id;
    }

    register(observable) {
        this.globalContext.set(this.observableName, observable);
    }

    get pipeMessage() {
        return {
            topic: "pipe",
            payload: {
                observable : this.observableName
            }
        }
    }

    remove() {
        this.globalContext.set(this.observableName, undefined);
    }
}


module.exports = {
    unsubscribe : function(subscription) {
        if (subscription !== undefined) 
            subscription.unsubscribe();

        subscription = undefined;
    },

    NodeRedObservable : NodeRedObservable,
    ON_LOADED_TIMEOUT : 10
}