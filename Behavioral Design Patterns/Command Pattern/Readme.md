
### Command Design Pattern

The Command pattern is a behavioral design pattern, in which an abstraction exists between an object that invokes a command, and the object that performs it.

E.g., a button will call the Invoker, that will call a pre-registered Command, that the Receiver will perform.

A Concrete Class will delegate a request to a command object, instead of implementing the request directly.

The command pattern is a good solution for implementing UNDO/REDO functionality into your application.

Uses:

GUI Buttons, menus
Macro recording
Multi-level undo/redo
Networking - send whole command objects across a network, even as a batch
Parallel processing or thread pools
Transactional behavior
Wizards


image.png