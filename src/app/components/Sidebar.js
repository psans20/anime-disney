export default function Sidebar(){
    return(
        <aside className="text-white flex flex-col justify-around gap-8 py-8 px-40">
<div>
<h2>Donate</h2>
</div>

<div>
<audio controls>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
</audio>
<div className="flex flex-row gap-4 items-center">
<h2>Public</h2>
<h2>Private</h2>
</div>
</div>

<div>
    <h2>Upload Music</h2>
</div>



        </aside>
    )
}