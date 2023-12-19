# TCR_TypeScript

Commands (as seen in package.json):


test_and_commit: This is my workflow for coding with Test && Commit || Revert. It checks for whether we can build or not, tests the code, and commits if it all succeeds, otherwise it goes back to last successful commit via Git.

test: These are the jest tests.

start: This is the development server via webpack.

build: This is the production version served via webpack (might be more obfuscated).

start-server: This starts the development server and is part of a playwright test suite.

test-playwright: This waits for localhost:3000 to be accessible (if fails to start check for existing bindings on port 3000, i.e. some app is using your port 3000), it also executes playwright tests.

test-with-server: Concurrently executes the start-server and test-playwright (blocks until port 3000 is accessible) scripts.

Mirroring this on a private GitLab repo where a pipeline for building/testing/containerizing exists. 

Slowly building up the code for this as of 12/5/2023.

npm run build
npm run test
./test_revert_commit is a powershell script for Test Commit || Revert workflow

I'm going to re-name this project to HTML Physics. It's physics with HTML and CSS!
I'm trying to build up a system that tracks collisions between HTML elements. I want things to bounce off each other in a pretty, abstract manner.
Eventually, it's going to replace the splash screen on [my portfolio](https://juandeaglio.github.io).

## The methodology:
I'm approaching this problem from a test-first perspective. I want to test collisions between html elements, and the reactive directions of travel when one element hits another. An equal and opposite reaction.

I'm writing an integration test which just features a simple App JSX structure. One that seeks to test the existence of collisions and predictable movement of elements. 

### Where does the movement come from?
Unit tests test the inner-workings of how new transforms are generated into CSS, testing the correct angle and magnitude of a 2-d vector.
The correct CSS transform is generated based on HTMLPhysics.

## A blog in the works:
With this project, I'm making a blog. I'll upload my deepest inner-most thoughts soon, so that everyone is familiar with the evil magical conjurations required to make such a system (Evil programming things like, do I temporarily break out of TCR to fix a dumb typo? Or do I create a generic "Controller" class which "controls" things?).
In the blog, I document my daily struggles, approaches to the code, and think about how I'll structure it when I'm making tests. Things like how do I form classes, how do I split apart responsibilities and allow modularity?
