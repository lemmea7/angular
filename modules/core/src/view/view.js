import {Node, DocumentFragment} from 'facade/dom';
import {ListWrapper wraps List} from 'facade/collection';
import {Record} from 'change_detection/record';

@IMPLEMENTS(WatchGroupDispatcher)
export class View {
  @FIELD('final _fragment:DocumentFragment')
  /// This list matches the _nodes list. It is sparse, since only Elements have ElementInjector
  @FIELD('final _rootElementInjectors:List<ElementInjector>')
  @FIELD('final _elementInjectors:List<ElementInjector>')
  @FIELD('final _textNodes:List<Text>')
  @FIELD('final _watchGroup:WatchGroup')
  /// When the view is part of render tree, the DocumentFragment is empty, which is why we need
  /// to keep track of the nodes.
  @FIELD('final _nodes:List<Node>')
  constructor(fragment:DocumentFragment) {
    this._fragment = fragment;
    this._nodes = ListWrapper.clone(fragment.childNodes);
  }

  notify(record:Record, target) {
    /*
    // dispatch to element injector or text nodes based on context
    if (Number.is(target)) {
      // we know it refferst to _textNodes.
    } else {
      // we know that it is ElementInjectorTarge
      var eTarget:ElementInjectorTarget = target;
      onChangeDispatcher.notify(this, eTarget);
      eTarget.invoke(record, _elementInjectors);
    }
    */
  }
}
