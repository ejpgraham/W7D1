
ActiveRecord::Base.transaction do
  Todo.delete_all

  Todo.create(title:"Get Milk", body:"make sure it's soy", done: false )
  Todo.create(title:"Get git", body:"get git git get", done: false )
  Todo.create(title:"contemplate the void", body:"embrace the void", done: true )


end
