import tkinter as tk

root = tk.Tk()
root.title("Two Boxes in One")

outer = tk.Frame(root, bg="blue", width=200, height=200)
outer.pack(padx=20, pady=20)

inner = tk.Frame(outer, bg="black", width=100, height=100)
inner.place(relx=0.5, rely=0.5, anchor="center")

root.mainloop()