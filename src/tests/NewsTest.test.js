import React from 'react'
import { createMount,createShallow } from '@material-ui/core/test-utils';
import News from './../views/news';
import HighlightItem from './../fragments/NewsHighlight';

describe('News', () => {
  const highlight = {
    title: "Halloween party",
    higlight: true,
    description:
      "Nokia halloween party this saturday at dream cafe! Come join us for some eerie fun",
    timestamp: "October 20, 2020",
    imgUrl: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
    imgTitle: "Halloween Party",
    paragraphs: {
      1: "This is the world we live in",
      2: "Come join us in death",
      3: "Hehou hahau",
      4: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

    Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
    
    Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
      5: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

    Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
    
    Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
    },
    paragraphImg: {
      2: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
      5: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
    },
  };

  let mount;
  let shallow;

  beforeAll(() => {
    mount = createMount();
    shallow = createShallow();
  });

  afterAll(() => {
    mount.cleanUp();
    shallow.cleanUp();
  });

  it('should work', () => {
    const tree = mount(<News/>);
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });

  it('testing highlight snapshot', () => {
    const tree = mount(<HighlightItem highlight={highlight} />);
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});